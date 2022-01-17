const getYearsFromRange = (firstYear, lastYear) => {
    const years =  [' '];
    for(let i = firstYear; i <= lastYear; i++) {
        years.push(i);
    }
    return years;
}
export default getYearsFromRange;
