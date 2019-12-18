export default (err, req, res, next) => {
    const { status, message } = err;
    res.status(status || 404);
    res.json({ message } || 'error');
    console.log(message);
    next();
};
