const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  
  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      // erro
    }
  }
  
  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      return res.status(200).json(umRegistro);
    } catch (erro) {
      // erro
    }
  }
  
  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado);
    } catch (erro) {
      // erro
    }
  }

  async criarUsuario(req, res) {
    const dadosParaCriacao = req.body;

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(dadosParaCriacao.usuario_senha, saltRounds);

      dadosParaCriacao.usuario_senha = hashedPassword;

      const novoUsuarioCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoUsuarioCriado);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao criar usuário' });
    }
  }

  async loginUsuario(req, res) {
    const { usuario_nome, usuario_senha } = req.body;

    try {
      const usuario = await this.entidadeService.buscaRegistroPorNome(usuario_nome);
      if (!usuario) {
        return res.status(400).json({ erro: 'Usuário não encontrado' });
      }

      const senhaCorreta = await bcrypt.compare(usuario_senha, usuario.usuario_senha);
      if (!senhaCorreta) {
        return res.status(400).json({ erro: 'Senha incorreta' });
      }

      const token = jwt.sign(
        { id: usuario.id, nome: usuario.usuario_nome },
        'seuSegredoJWT',
        { expiresIn: '1h' }
      );

      return res.status(200).json({ token, usuario: { id: usuario.id, nome: usuario.usuario_nome } });
    } catch (erro) {
      console.log(erro);
      return res.status(500).json({ erro: 'Erro ao fazer login' });
    }
  }
  
  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (erro) {
      // erro
    }
  }
  
  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
  
  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;