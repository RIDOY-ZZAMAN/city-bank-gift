const cardDistribution = (Information) => {
    const districtName = [];
    Information.map(info => districtName.push(info.district.slice(0, 2).toUpperCase()));
    const currentYear = []
    Information.map(info => currentYear.push(info.currentYear.toString().substr(-2)));
    console.log(currentYear);

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



