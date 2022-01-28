const isButtonCheck = (data, page) => {
    if (data.totalHits / page >= 12) {
        return true;
    } else {
        return false;
    };
};

export default isButtonCheck;