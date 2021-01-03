package main

import (
	"context"
	"fmt"

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

	fmt.Printf(github.Stringify(repos))
}
