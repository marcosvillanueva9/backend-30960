export function auth(req, res, next) {
    if (req.header('secret') === 'supercalifragilisticoespialidoso') {
        next();
    } else {
        res.status(403).send('Forbidden'); // Forbidden
    }
}