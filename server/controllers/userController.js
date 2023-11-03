exports.homepage = async (req, res) => {
    try {
        res.render('index', { title: 'Shop Web - Home'});
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}