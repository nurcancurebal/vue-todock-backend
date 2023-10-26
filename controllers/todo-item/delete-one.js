const ModelTodoItem = require("../../models/todo-item");

module.exports = async function (req, res) {

    try {

        const params = req.params;

        const findOneTodoItem = await ModelTodoItem.findByIdAndDelete(params.id);

        if (!findOneTodoItem) {
            throw new Error("Not found todo item!!!");
        };

        res.send();

    } catch (error) {

        console.error(error);
        res.status(400);
        res.send({ message: error.message });

    };

}