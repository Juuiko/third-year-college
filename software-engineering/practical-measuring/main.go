package main

//type StreamChart struct {
//	loc  int    `json:"number"`
//	name string `json:"title"`
//}

//type RadarChart struct {
//	loc  int    `json:"number"`
//	name string `json:"title"`
//}

func main() {

	data := callGithubAPI("juuiko")
	calcPieData(data)
	calcSunData(data)

	//get total bytes in the repo
	//total := 0
	//for k := range rLanguages {
	//	total += rLanguages[k]
	//}
	//get distribution for each language
	//commitLength := len(rUserCommits)
	//for l := range rLanguages {
	//	total += (rLanguages[l] / total) * 100
	//}

	//get the date of each commit
	//for j := range rUserCommits {
	//	fmt.Println(rUserCommits[j].GetCommit().GetAuthor().Date)
	//}
	//jsonString, err := json.Marshal(languages)
	//fmt.Println(languages)
	//fmt.Println(string(jsonString))
	//err = ioutil.WriteFile("test.json", jsonString, 0644)
	//if err != nil {
	//	fmt.Println(err)
	//}
}
