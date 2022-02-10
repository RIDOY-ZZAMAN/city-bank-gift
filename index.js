const cardDistribution = (Information) => {
    const newInformatin = []
    Information.map(info => newInformatin.push({ cardNubmer: info.district.slice(0, 2).toUpperCase().concat(info.currentYear.toString().substr(-2)) }));


    console.log(newInformatin)







}


cardDistribution([
    {
        name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2
    },

    {
        name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority:
            1
    }
])



