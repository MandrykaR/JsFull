export const printing = () => {
    console.log(1);

    setTimeout(function () {
        console.log(2);

        setTimeout(function () {
            console.log(3);

            setTimeout(function () {
                console.log(4);

                setTimeout(function () {
                    console.log(5);

                    setTimeout(function () {
                        console.log(6);
                    }, 0);
                }, 1000);
            }, 0);
        }, 0);
    }, 1000);
};
