const getYearsFromRange = (firstYear, lastYear) => {
    const years =  [];
    for(let i = firstYear; i <= lastYear; i++) {
        years.unshift(i);
    }
    years.unshift(' ');
    return years;
}
export default getYearsFromRange;
