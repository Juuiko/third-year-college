package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

//heroku port calc func
func getPort() string {
	var port = os.Getenv("PORT")
	if port == "" {
		port = "4747"
		fmt.Println("INFO: No PORT environment variable detected, defaulting to " + port)
	}
	return ":" + port
}

//basic rest api that runs the previous mainline
func githubPage(w http.ResponseWriter, r *http.Request) {
	if len(r.URL.Query()) == 1 {
		for k, v := range r.URL.Query() {
			fmt.Printf("%s: %s\n", k, v)
			data := callGithubAPI(v[0])
			pieData := calcPieData(data)
			sunData := calcSunData(data)
			streamData := calcStreamData(data)

			//send json to get request
			json.NewEncoder(w).Encode(pieData)
			json.NewEncoder(w).Encode(streamData)
			json.NewEncoder(w).Encode(sunData)
		}
	}
}

func handleRequests() {
	http.HandleFunc("/api", githubPage)
	log.Fatal(http.ListenAndServe(getPort(), nil))
}

func main() {
	handleRequests()
	fmt.Println("listening...")
}
