package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"

	"github.com/google/go-github/github"
)

func main() {
	client := github.NewClient(nil)

	user := "juuiko"
	opt := &github.RepositoryListOptions{Type: "owner", Sort: "updated", Direction: "desc"}

	repos, _, err := client.Repositories.List(context.Background(), user, opt)
	if err != nil {
		fmt.Println(err)
	}

	languages, _, err1 := client.Repositories.ListLanguages(context.Background(), "juuiko", repos[0].GetName())
	if err1 != nil {
		fmt.Println(err1)
	}

	jsonString, err := json.Marshal(languages)
	fmt.Println(languages)
	fmt.Println(string(jsonString))
	err = ioutil.WriteFile("test.json", jsonString, 0644)
	if err != nil {
		fmt.Println(err)
	}
}
