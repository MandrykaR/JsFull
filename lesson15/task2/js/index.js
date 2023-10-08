export const createCalculator = () => {
    let memory = 0;
    return {
        add: function (num) {
            memory += num;
        },
        decrease: function (num) {
            memory -= num;
        },
        reset: function () {
            memory = 0;
        },
        getMemo: function () {
            return memory;
        },
    };
}
