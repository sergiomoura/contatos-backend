const express = require('express');
const router = express.Router();

// Importar os middlewares
const validaToken = require('../middlewares/validaToken');

const ContatosController = require('../controllers/ContatosController');

/**
Listar contatos                              | GET     | /contatos
Listar informações de um contato específico  | GET     | /contatos/:id
Buscar contato                               | GET     | /contatos/search
Cadastrar um contato                         | POST    | /contatos
Deletar um contato                           | DELETE  | /contatos/:id
Alterar um contato                           | UPDATE  | /contatos/:id
*/

router.get('/', validaToken, ContatosController.index);
router.get('/search', ContatosController.search);
router.get('/:id', ContatosController.show);
router.post('/', ContatosController.create);
router.delete('/:id', ContatosController.destroy);
router.put('/:id', ContatosController.update);

module.exports = router;
