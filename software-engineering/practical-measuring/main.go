package main

func main() {

	data := callGithubAPI("juuiko")
	calcPieData(data)
	calcSunData(data)
	calcStreamData(data)

}
