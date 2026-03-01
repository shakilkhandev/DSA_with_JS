function formatMiliSeconds(ms) {

    if (ms < 0) ms = -ms;

    const formulaTable = {
        day: Math.floor(ms / (1000 * 60 * 60 * 24)),
        hour: Math.floor(ms / (1000 * 60 * 60)),
        minute: Math.floor(ms / (1000 * 60)),
        second: Math.floor(ms / 1000),
    }


    return (

        Object.entries(formulaTable).filter((item) => item[1] > 0).map(item => item[1] + " " + (item[1] !== 1 ? item[0] + "s" : item[0])).join(", ")


    )


};

let res = formatMiliSeconds(23000);

console.log(res);