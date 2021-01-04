package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"sort"
	"time"
)

//StreamChart is the chart
type StreamChart struct {
	Lang string    `json:"number"`
	Size int       `json:"title"`
	Date time.Time `json:"time"`
}

func calcStreamData(data []Data) {

	//init sum variables
	repoSize := 0
	commitSize := 0

	streamData := make([]StreamChart, 0)
	languages := make([]string, 0)
	foundMatch := false

	//for each repo
	for i := range data {

		repoSize = 0
		foundMatch = false

		//estimate the size of each commit
		for _, v := range data[i].languages {
			repoSize += v
		}
		commitSize = repoSize / len(data[i].commits)

		//add each commit to a slice
		for j := range data[i].commits {
			streamData = append(streamData, StreamChart{data[i].repo.GetLanguage(), commitSize, *data[i].commits[j].GetCommit().GetAuthor().Date})
		}

		//populate a slice with each langauge being tracked
		for j := 0; j < len(languages) && foundMatch == false; j++ {
			if languages[j] == data[i].repo.GetLanguage() {
				foundMatch = true
			}
		}
		if foundMatch == false {
			languages = append(languages, data[i].repo.GetLanguage())
		}
	}

	//sort slice
	sort.Slice(streamData, func(i, j int) bool {
		return streamData[i].Date.Before(streamData[j].Date)
	})

	//make an emtpy map with each datatype
	frame := map[string]int{}
	for i := range languages {
		frame[languages[i]] = 0
	}

	//create a slice of undefined frames
	frames := make([]map[string]int, len(streamData))

	//insert first map
	frames[0] = frame

	//fill in map
	for i := 0; i < len(streamData)-1; i++ {
		frames[i][streamData[i].Lang] = streamData[i].Size
		frames[i+1] = frames[i]
	}

	//convert data slice to json
	jsonData, err := json.Marshal(frames)
	if err != nil {
		fmt.Println(err)
	}

	//write json to a file
	err = ioutil.WriteFile("streamStats.json", jsonData, 0644)
	if err != nil {
		fmt.Println(err)
	}
}
