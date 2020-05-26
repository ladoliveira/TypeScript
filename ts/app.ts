import{ NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller)); //.bind garante que a referencia do this seja de controller...
$('#botao-importa').click(controller.importarDados.bind(controller));