package main

import (
	"context"
	"fmt"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
)

//Data is compilation of all necessary API calls
type Data struct {
	repo      *github.Repository
	languages map[string]int
	commits   []*github.RepositoryCommit
}

func callGithubAPI(user string) []Data {
	//authenticate
	ctx := context.Background()
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: ""},
	)
	tc := oauth2.NewClient(ctx, ts)

	//make github api client
	client := github.NewClient(tc)

	//repo list sorting
	opt := &github.RepositoryListOptions{Type: "owner", Sort: "updated", Direction: "desc"}

	//get list of repos
	repos, _, err := client.Repositories.List(context.Background(), user, opt)
	if err != nil {
		fmt.Println(err)
	}

	//commit list options
	clo := github.CommitsListOptions{Author: user}

	//create final data array
	data := make([]Data, 0)

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

		//add all the data to the final array
		data = append(data, Data{repos[i], rLanguages, rUserCommits})
	}
	return data
}
