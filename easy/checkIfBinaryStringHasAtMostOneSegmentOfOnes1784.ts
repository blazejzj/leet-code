function checkOnesSegment(s: string): boolean {
    return s.indexOf("01") === -1;
}

//
const fetchData = () => 1;

const hello = async () => {
    try {
        const data = await fetchData();
        if (data) {
            console.log(fetchData);
        } else {
            console.log("error");
        }
    } catch (err) {}
};
