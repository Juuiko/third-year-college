package main

import (
	"context"
	"fmt"

	"github.com/google/go-github/github"
)

func main() {
	//make github api client
	client := github.NewClient(nil)

	//pass user input later
	user := "juuiko"

	//repo list sorting
	opt := &github.RepositoryListOptions{Type: "owner", Sort: "updated", Direction: "desc"}

	//get list of repos
	repos, _, err := client.Repositories.List(context.Background(), user, opt)
	if err != nil {
		fmt.Println(err)
	}

	//commit list options
	clo := github.CommitsListOptions{Author: user}

	//loop over every repo
	for i := range repos {
		//get map of languages used in every repo
		rLanguages, _, err1 := client.Repositories.ListLanguages(context.Background(), user, repos[i].GetName())
		if err1 != nil {
			fmt.Println(err1)
		}

		//get a slice of commit objects by the user
		rUserCommits, _, err2 := client.Repositories.ListCommits(context.Background(), user, repos[i].GetName(), &clo)
		if err2 != nil {
			fmt.Println(err2)
		}
		fmt.Println(rLanguages)
		//get the date of each commit
		for j := range rUserCommits {
			fmt.Println(rUserCommits[j].GetCommit().GetAuthor().Date)
		}
	}
	//jsonString, err := json.Marshal(languages)
	//fmt.Println(languages)
	//fmt.Println(string(jsonString))
	//err = ioutil.WriteFile("test.json", jsonString, 0644)
	//if err != nil {
	//	fmt.Println(err)
	//}
}
