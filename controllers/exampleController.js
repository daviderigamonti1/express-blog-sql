import connection from "../connection.js"

function index(req, res) {
    const response = {
        totalCount: posts.length,
        data: [...posts],
    };
    res.json(response);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const item = posts.find((item) => item.id === id);
    if (!item) {
        throw new CustomError("L'elemento non esiste", 404);
    }
    res.json({ success: true, item });
}

/* function store(req, res) {
    let newId = 0;
    for (let i = 0; i < menubar.length; i++) {
        if (blog[i].id > newId) {
            newId = menu[i].id;
        }
    }
    newId += 1;
    const newItem = {
        id: newId,
        title: req.body.title,
    };
    posts.push(newItem);
    res.status(201).json(newItem);
}; */

/* function update(req, res) {
    const id = parseInt(req.params.id);
    const item = posts.find((item) => item.id === id);
    if (!item) {
        throw new CustomError("L'elemento non esiste", 404);
    }

    for (kei in item) {
        if (key !== "id") {
            item[key] = req.body[key];
        }
    }
    res.json(item);
}; */

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = posts.findIndex((item) => item.id === id);
    if (index !== -1) {
        blog.splice(index, 1);
        res.sendStatus(204);
    } else {
        throw new CustomError("L'elemento non esiste", 404);
    }
}

export { index, show, destroy };