class Tarefa {
  private id: number;
  private descricao: string;
  private status: string;

  constructor(id: number, descricao: string, status: string) {
    this.id = id;
    this.descricao = descricao;
    this.status = status;
  }
}

class GerenciadorTarefa {
  private tarefas: Tarefa[];

  constructor() {
    this.tarefas = [];
  }

  public criarTarefa(descricao: string): void {}

  public editarTarefa(
    idTarefa: number,
    novaDescricao: string,
    novoStatus: string,
    novaCategoria: string
  ): void {
    // Implementar lógica para editar uma tarefa existente
  }

  public excluirTarefa(idTarefa: number): void {
    // Implementar lógica para excluir uma tarefa
  }

  public definirStatusTarefa(idTarefa: number, status: string): void {
    // Implementar lógica para definir o status de uma tarefa
  }

  private encontrarTarefaPeloId(idTarefa: number): Tarefa | undefined {
    // Implementar lógica para encontrar uma tarefa pelo ID
    return undefined;
  }

  private salvarTarefaNoLocalStorage(): void {
    // Implementar lógica para salvar as tarefas no armazenamento local
  }
}

class QuadroTarefa {
  private aFazer: Tarefa[];
  private emAndamento: Tarefa[];
  private concluida: Tarefa[];

  constructor() {
    this.aFazer = [];
    this.emAndamento = [];
    this.concluida = [];
  }

  public moverTarefa(
    tarefa: Tarefa,
    deStatus: string,
    paraStatus: string
  ): void {
    // Implementar lógica para mover uma tarefa entre status
  }

  private definirStatusTarefa(tarefa: Tarefa, status: string): void {
    // Implementar lógica para definir o status de uma tarefa
  }

  private removerTarefaDoStatus(tarefa: Tarefa): void {
    // Implementar lógica para remover uma tarefa de um status específico
  }

  private salvarQuadroTarefaNoLocalStorage(): void {
    // Implementar lógica para salvar o quadro de tarefas no armazenamento local
  }
}

class CategoriaTarefa {
  private id: number;
  private nome: string;
  private cor: string;

  constructor(id: number, nome: string, cor: string) {
    this.id = id;
    this.nome = nome;
    this.cor = cor;
  }
}

class GerenciadorCategoria {
  private categorias: CategoriaTarefa[];
  private coresPredefinidas: { cor: string; utilizada: boolean }[];

  constructor() {
    this.categorias = [];
    this.coresPredefinidas = [];
  }

  public criarCategoria(nome: string): void {
    // Implementar lógica para criar uma nova categoria
  }

  public editarCategoria(idCategoria: number, novoNome: string): void {
    // Implementar lógica para editar uma categoria existente
  }

  public excluirCategoria(idCategoria: number): void {
    // Implementar lógica para excluir uma categoria
  }

  private encontrarCategoriaPeloId(
    idCategoria: number
  ): CategoriaTarefa | undefined {
    // Implementar lógica para encontrar uma categoria pelo ID
    return undefined;
  }

  private salvarCategoriaNoLocalStorage(): void {
    // Implementar lógica para salvar as categorias no armazenamento local
  }

  private definirCorCategoria(): void {
    // Implementar lógica para definir a cor de uma categoria
  }

  private inicializarCoresPredefinidas(): void {
    // Implementar lógica para inicializar as cores predefinidas
  }

  private corEstaSendoUsada(cor: string): boolean {
    // Implementar lógica para verificar se a cor está sendo usada por alguma categoria
    return false;
  }

  private obterCorDisponivel(): string | undefined {
    // Implementar lógica para obter uma cor disponível
    return undefined;
  }
}

class InterfaceGrafica {
  private gerenciadorTarefa: GerenciadorTarefa;
  private quadroTarefa: QuadroTarefa;
  private gerenciadorCategoria: GerenciadorCategoria;

  constructor(
    gerenciadorTarefa: GerenciadorTarefa,
    quadroTarefa: QuadroTarefa,
    gerenciadorCategoria: GerenciadorCategoria
  ) {
    this.gerenciadorTarefa = gerenciadorTarefa;
    this.quadroTarefa = quadroTarefa;
    this.gerenciadorCategoria = gerenciadorCategoria;
  }

  public chamarMetodo(idBotao: string, dados: any): void {
    // Implementar lógica para chamar um método com base no botão clicado
  }
}
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``

const botaoPopover = document.getElementById("botao-popover");
const popover = document.getElementById("popover");
const botaoFecharPopover = document.getElementById("botao-fechar-popover");

console.log(botaoFecharPopover);

botaoPopover?.addEventListener("click", () => {
  trocarExibicaoPopover();
});

botaoFecharPopover?.addEventListener("click", () => {
  trocarExibicaoPopover();
});

document.addEventListener("click", (event: MouseEvent) => {
  fecharPopoverAoClicarFora(event);
});

function trocarExibicaoPopover(): void {
  popover?.classList.toggle("hidden");
}

function fecharPopoverAoClicarFora(event: MouseEvent) {
  const targetNode = event.target as Node;

  if (
    targetNode &&
    !botaoPopover?.contains(targetNode) &&
    !popover?.contains(targetNode)
  ) {
    popover?.classList.add("hidden");
  }
}

const botaoEditarTarefa = document.getElementById("botao-editar-tarefa");
const dialogEditarTarefa = document.getElementById("dialog-editar-tarefa");
const botaoCancelarEditarTarefa = document.getElementById(
  "botao-cancelar-edicao"
);

botaoEditarTarefa?.addEventListener("click", () => {
  exibirDialogEditarTarefa();
});

function exibirDialogEditarTarefa(): void {
  dialogEditarTarefa?.classList.remove("hidden");
}

botaoCancelarEditarTarefa?.addEventListener("click", () => {
  fecharDialogEditarTarefa();
});

function fecharDialogEditarTarefa(): void {
  dialogEditarTarefa?.classList.add("hidden");
}