import connection from "../connection.js"

function index(req, res) {
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    })
}

function show(req, res) {
    const id = req.params.id
    const sql = 'SELECT posts.*, tags.id, tags.label AS tags FROM tags JOIN post_tag ON post_tag.tag_id = tags.id JOIN posts ON posts.id = post_tag.post_id WHERE posts.id = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'Pizza not found' });
        res.json(results[0]);
    });
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
    const { id } = req.params;
    const sql = 'DELETE FROM posts WHERE id = ?';
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete post' });
        res.sendStatus(204)
    });
}

export { index, show, destroy };