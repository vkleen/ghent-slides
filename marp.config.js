module.exports = {
    html: true,
    engine: ({ marp }) => marp.use(require('markdown-it-mermaid')),
}
