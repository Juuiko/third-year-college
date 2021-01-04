package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
)

//SunChartRoot is the data type to hold the root of the chart
type SunChartRoot struct {
	Name      string         `json:"name"`
	Languages []SunChartRepo `json:"children"`
}

//SunChartRepo is the data type to hold the list of repos
type SunChartRepo struct {
	Name      string         `json:"name"`
	Languages []SunChartLang `json:"children"`
}

//SunChartLang is the data type to to hold the individual languages
type SunChartLang struct {
	Name string `json:"name"`
	Loc  int    `json:"loc"`
}

func calcSunData(data []Data) {
	//setup slice for pie chart value
	sunData := make([]SunChartRepo, 0)

	//for each repo
	for i := range data {
		//make empty language struct
		langData := make([]SunChartLang, 0)
		//fill in language struct
		for k, v := range data[i].languages {
			langData = append(langData, SunChartLang{k, v})
		}
		//add name and language struct
		sunData = append(sunData, SunChartRepo{data[i].repo.GetName(), langData})
	}

	//nest all data into a root element
	finalData := make([]SunChartRoot, 1)
	finalData[0] = SunChartRoot{"root", sunData}

	//convert data slice to json
	jsonData, err := json.Marshal(finalData)
	if err != nil {
		fmt.Println(err)
	}

	//clean up first and last elements from the byte slice
	jsonData = jsonData[1:]
	jsonData = jsonData[:len(jsonData)-1]

	//write json to a file
	err = ioutil.WriteFile("sunStats.json", jsonData, 0644)
	if err != nil {
		fmt.Println(err)
	}
}
