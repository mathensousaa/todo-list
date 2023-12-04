import 'tailwindcss/tailwind.css';

class Tarefa {
    public id: number;
    public descricao: string;
    public status: string;
    public data: Date | null;
    public categoria: CategoriaTarefa | null;

    constructor(id: number, descricao: string, status: string) {
        this.id = id;
        this.descricao = descricao;
        this.status = status;
        this.data = null;
        this.categoria = null;
    }

    public getId(): number {
        return this.id;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getStatus(): string {
        return this.status;
    }

    public getData(): Date | null {
        return this.data;
    }
}

class GerenciadorTarefa {
    private tarefas: Tarefa[];

    constructor() {
        const tarefasSalvas = localStorage.getItem('tarefas');
        this.tarefas = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
    }

    public criarTarefa(descricao: string): { resultado: string, titulo: string, mensagem?: string } {
        try {
            if (!descricao) {
                throw new Error('Descrição da tarefa não informada!');
            }

            const idTarefa = this.tarefas.length + 1;
            const novaTarefa = new Tarefa(idTarefa, descricao, this.obterStatusDaTarefa());

            this.tarefas.push(novaTarefa);
            this.salvarTarefaNoLocalStorage();

            return {
                resultado: 'sucesso',
                titulo: 'Tarefa criada com sucesso!',
            };
        } catch (error) {
            return {
                resultado: 'erro',
                titulo: 'Não foi possível criar a tarefa!',
                mensagem: (error as Error).message
            };
        }
    }

    public editarTarefa(idTarefa: number, novaDescricao: string, novoStatus: string, novaCategoria: string): void {
        // Implementar lógica para editar uma tarefa existente
    }

    public excluirTarefa(idTarefa: number): void {
        // Implementar lógica para excluir uma tarefa
    }

    public definirStatusTarefa(idTarefa: number, status: string): void {
        // Implementar lógica para definir o status de uma tarefa
    }

    public obterTarefas(): Tarefa[] {
        return this.tarefas;
    }

    private encontrarTarefaPeloId(idTarefa: number): Tarefa | undefined {
        // Implementar lógica para encontrar uma tarefa pelo ID
        return undefined;
    }

    private salvarTarefaNoLocalStorage(): void {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }


    private obterStatusDaTarefa(): string {
        const queryString = window.location.search;
        const parametrosURL = new URLSearchParams(queryString);

        const statusTarefa = parametrosURL.get('status');

        switch (statusTarefa) {
            case '1':
                return 'Em andamento';
            case '2':
                return 'Concluída';
            default:
                return 'A fazer';
        }
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

    public moverTarefa(tarefa: Tarefa, deStatus: string, paraStatus: string): void {
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

    private encontrarCategoriaPeloId(idCategoria: number): CategoriaTarefa | undefined {
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

    //Criação de Tarefa
    private formularioAdicionarTarefa: HTMLFormElement | null;
    private campoDescricaoTarefa: HTMLInputElement;
    private botoesAdicionarTarefaAFazer: NodeListOf<HTMLButtonElement> | null;
    private botoesAdicionarTarefaEmAndamento: NodeListOf<HTMLButtonElement> | null;
    private botoesAdicionarTarefaConcluida: NodeListOf<HTMLButtonElement> | null;

    // Colunas do quadro
    private colunaTarefasAFazer: HTMLDivElement | null;
    private colunaTarefasEmAndamento: HTMLDivElement | null;
    private colunaTarefasConcluidas: HTMLDivElement | null;

    // Toast
    private toastSucesso: HTMLDivElement | null;
    private toastErro: HTMLDivElement | null;

    //Popover
    private popoversTarefa: NodeListOf<HTMLElement> | null = null;
    private botoesPopoverTarefa: NodeListOf<HTMLElement> | null = null;
    private botoesFecharPopover: NodeListOf<HTMLElement> | null = null;

    constructor() {
        this.gerenciadorTarefa = new GerenciadorTarefa();
        this.quadroTarefa = new QuadroTarefa();
        this.gerenciadorCategoria = new GerenciadorCategoria();

        this.formularioAdicionarTarefa = document.getElementById("formulario-adicionar-tarefa") as HTMLFormElement;
        this.campoDescricaoTarefa = document.getElementById("campo-descricao-tarefa") as HTMLInputElement;
        this.botoesAdicionarTarefaAFazer = document.querySelectorAll("#botao-adicionar-tarefa-a-fazer");
        this.botoesAdicionarTarefaEmAndamento = document.querySelectorAll("#botao-adicionar-tarefa-em-andamento");
        this.botoesAdicionarTarefaConcluida = document.querySelectorAll("#botao-adicionar-tarefa-concluida");

        this.colunaTarefasAFazer = document.getElementById("tarefas-a-fazer") as HTMLDivElement;
        this.colunaTarefasEmAndamento = document.getElementById("tarefas-em-andamento") as HTMLDivElement;
        this.colunaTarefasConcluidas = document.getElementById("tarefas-concluidas") as HTMLDivElement;

        this.toastErro = document.getElementById("toast-erro") as HTMLDivElement;
        this.toastSucesso = document.getElementById("toast-sucesso") as HTMLDivElement;

        this.popoversTarefa = document.querySelectorAll('[id^="popover-tarefa-"]');
        this.botoesPopoverTarefa = document.querySelectorAll("#botao-popover-tarefa-1")
        this.botoesFecharPopover = document.querySelectorAll('[id^="botao-fechar-popover-tarefa-"]');

        this.exibirTarefas();

        this.formularioAdicionarTarefa?.addEventListener("submit", (evento) => {
            evento.preventDefault();
            const descricao = this.campoDescricaoTarefa.value;
            const resposta = this.gerenciadorTarefa.criarTarefa(descricao);
            this.campoDescricaoTarefa.value = "";
            this.exibirToast(resposta.resultado, resposta.titulo, resposta.mensagem);
            this.removerStatusTarefaDaURL();
            this.exibirTarefas();
        })

        this.botoesAdicionarTarefaAFazer?.forEach(botao => {
            botao.addEventListener("click", () => {
                this.removerStatusTarefaDaURL();
                this.campoDescricaoTarefa.focus();
                this.exibirTarefas();
            })
        })

        this.botoesAdicionarTarefaEmAndamento?.forEach(botao => {
            botao.addEventListener("click", () => {
                this.removerStatusTarefaDaURL();
                this.adicionarStatusTarefaURL(1);
                this.campoDescricaoTarefa.focus();
                this.exibirTarefas();
            })
        })

        this.botoesAdicionarTarefaConcluida?.forEach(botao => {
            botao.addEventListener("click", () => {
                this.removerStatusTarefaDaURL();
                this.adicionarStatusTarefaURL(2);
                this.campoDescricaoTarefa.focus();
                this.exibirTarefas();
            })
        })
    }

    // Toast
    private exibirToast(tipo: string, titulo: string, mensagem: string = '') {
        const toastElement = tipo === 'sucesso' ? this.toastSucesso : this.toastErro;
        const tituloToast = document.getElementById(`titulo-toast-${tipo}`);
        const mensagemToast = document.getElementById(`mensagem-toast-${tipo}`);

        if (toastElement && tituloToast && mensagemToast) {
            tituloToast.innerText = titulo;
            mensagemToast.innerText = mensagem;

            toastElement.classList.remove('hidden');

            setTimeout(() => {
                toastElement.classList.add('hidden');
            }, 3000);
        }
    }

    // Tarefa
    private exibirTarefas(): void {
        const tarefas = this.gerenciadorTarefa.obterTarefas();

        this.colunaTarefasAFazer!.innerHTML = "";
        this.colunaTarefasEmAndamento!.innerHTML = "";
        this.colunaTarefasConcluidas!.innerHTML = "";

        tarefas.forEach(tarefa => {
            const cardTarefa = this.cardTarefa(tarefa);

            switch (tarefa.status) {
                case 'A fazer':
                    this.colunaTarefasAFazer?.appendChild(cardTarefa);
                    break;
                case 'Em andamento':
                    this.colunaTarefasEmAndamento?.appendChild(cardTarefa);
                    break;
                case 'Concluída':
                    this.colunaTarefasConcluidas?.appendChild(cardTarefa);
                    break;
            }
        })

        this.inicializarPopovers();
        this.adicionarEventosPopover();
    }

    private cardTarefa(tarefa: Tarefa): HTMLDivElement {
        const cardTarefa = document.createElement('div');
        cardTarefa.classList.add('card-tarefa');
        cardTarefa.id = `tarefa-${tarefa.id}`;

        const descricaoTarefa = document.createElement('p');
        descricaoTarefa.classList.add('descricao-tarefa');
        descricaoTarefa.innerText = tarefa.descricao;

        cardTarefa.innerHTML = `
          <!-- Botão -->
          <button class="rounded-full bg-gray-100 h-8 w-8 flex justify-center items-center hover:bg-green-500 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
              <path d="M15.0666 2L6.2666 10.8L2.2666 6.8" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Detalhes da Tarefa -->
          <div class="flex-1">
            <span class="text-sm">${tarefa.descricao}</span>
            <div class="flex gap-1 ${!tarefa.data ? 'hidden' : ''}">
              <!-- Ícone de calendário -->
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M13.3333 2.66678H3.99996C3.26358 2.66678 2.66663 3.26373 2.66663 4.00011V13.3334C2.66663 14.0698 3.26358 14.6668 3.99996 14.6668H13.3333C14.0697 14.6668 14.6666 14.0698 14.6666 13.3334V4.00011C14.6666 3.26373 14.0697 2.66678 13.3333 2.66678Z"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3333 1.33325V3.99992"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.99988 1.33325V3.99992"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66663 6.66678H14.6666"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.99988 9.33325H6.00988"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.66663 9.33325H8.67663"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3333 9.33325H11.3433"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.99988 12H6.00988"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.66663 12H8.67663"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3333 12H11.3433"
                stroke="#6B7280"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              </svg>
              <span class="text-xs text-gray-500">${tarefa.data}</span>
            </div>
          </div>

          <!-- Categoria -->
          <span class="text-xs text-gray-500 ${!tarefa.categoria ? 'hidden' : ''}">${tarefa.categoria}</span>

          <!-- Popover -->
          <div class="flex justify-end">
            <div
                id="popover-tarefa-${tarefa.id}"
                class="w-[216px] mt-10 absolute rounded-md border bg-white shadow-md hidden text-sm font-medium"
            >
                <div
                class="popover-header font-semibold border-b-[1px] border-gray-100 p-3 text-blue-950"
                >
                Opções
                </div>
                <div class="popover-body p-1">
                <ul class="flex flex-col gap-2">
                    <li
                    class="flex gap-2 items-center hover:bg-gray-100 rounded-md"
                    >
                    <button class="w-full flex items-center gap-2 p-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        >
                        <g clip-path="url(#clip0_85_1221)">
                            <path
                            d="M11.3334 2.00022C11.5085 1.82513 11.7163 1.68623 11.9451 1.59147C12.1739 1.49671 12.4191 1.44794 12.6667 1.44794C12.9143 1.44794 13.1595 1.49671 13.3883 1.59147C13.6171 1.68623 13.8249 1.82513 14 2.00022C14.1751 2.17532 14.314 2.38319 14.4088 2.61196C14.5036 2.84073 14.5523 3.08593 14.5523 3.33355C14.5523 3.58118 14.5036 3.82638 14.4088 4.05515C14.314 4.28392 14.1751 4.49179 14 4.66689L5.00004 13.6669L1.33337 14.6669L2.33337 11.0002L11.3334 2.00022Z"
                            stroke="#334155"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_85_1221">
                            <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0 0.000244141)"
                            />
                            </clipPath>
                        </defs>
                        </svg>
                        <span>Editar tarefa</span>
                    </button>
                    </li>
                    <li
                    class="flex gap-2 items-center hover:bg-gray-100 rounded-md"
                    >
                    <button class="w-full flex items-center gap-2 p-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        >
                        <path
                            d="M13.3334 3.33356H6.00004L1.33337 8.00022L6.00004 12.6669H13.3334C13.687 12.6669 14.0261 12.5264 14.2762 12.2764C14.5262 12.0263 14.6667 11.6872 14.6667 11.3336V4.66689C14.6667 4.31327 14.5262 3.97413 14.2762 3.72408C14.0261 3.47403 13.687 3.33356 13.3334 3.33356Z"
                            stroke="#334155"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12 6.00024L8 10.0002"
                            stroke="#334155"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8 6.00024L12 10.0002"
                            stroke="#172554"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                        <span>Excluir tarefa</span>
                    </button>
                    </li>
                </ul>
                </div>
                <div
                class="popover-footer border-t-[1px] border-gray-100 p-1 text-blue-950"
                >
                <ul class="flex flex-col gap-2">
                    <li
                    class="flex gap-2 items-center hover:bg-gray-100 rounded-md"
                    >
                    <button
                        id="botao-fechar-popover-tarefa-${tarefa.id}"
                        class="w-full flex items-center gap-2 p-2"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        >
                        <path
                            d="M6 14.0002H3.33333C2.97971 14.0002 2.64057 13.8598 2.39052 13.6097C2.14048 13.3597 2 13.0205 2 12.6669V3.33358C2 2.97996 2.14048 2.64082 2.39052 2.39077C2.64057 2.14072 2.97971 2.00024 3.33333 2.00024H6"
                            stroke="#334155"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M10.6666 11.3336L14 8.00026L10.6666 4.66693"
                            stroke="#334155"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14 8.00024H6"
                            stroke="#172554"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                        <span>Fechar</span>
                    </button>
                    </li>
                </ul>
                </div>
            </div>
            <button
                id="botao-popover-tarefa-${tarefa.id}"
                class="bg-gray-50 text-white p-2 border-[1px] border-gray-100 rounded-md hover:bg-gray-100"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                >
                <path
                    d="M8.66667 8.66667C9.03486 8.66667 9.33333 8.36819 9.33333 8C9.33333 7.63181 9.03486 7.33334 8.66667 7.33334C8.29848 7.33334 8 7.63181 8 8C8 8.36819 8.29848 8.66667 8.66667 8.66667Z"
                    fill="#9CA3AF"
                    stroke="#9CA3AF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8.66667 4C9.03486 4 9.33333 3.70152 9.33333 3.33333C9.33333 2.96514 9.03486 2.66666 8.66667 2.66666C8.29848 2.66666 8 2.96514 8 3.33333C8 3.70152 8.29848 4 8.66667 4Z"
                    fill="#9CA3AF"
                    stroke="#9CA3AF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8.66667 13.3333C9.03486 13.3333 9.33333 13.0349 9.33333 12.6667C9.33333 12.2985 9.03486 12 8.66667 12C8.29848 12 8 12.2985 8 12.6667C8 13.0349 8.29848 13.3333 8.66667 13.3333Z"
                    fill="#9CA3AF"
                    stroke="#9CA3AF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </svg>
            </button>
            </div>
        `;

        return cardTarefa;
    }

    private adicionarStatusTarefaURL(novoStatus: number) {
        const parametrosURL = new URLSearchParams(window.location.search);

        parametrosURL.set('status', novoStatus.toString());

        window.history.replaceState({}, '', `${window.location.pathname}?${parametrosURL.toString()}`);
    }

    private removerStatusTarefaDaURL() {
        const url = new URL(window.location.href);

        url.searchParams.delete('status');

        window.history.replaceState({}, document.title, url.toString());
    }


    // Popover
    private trocarExibicaoPopover(popover: HTMLDivElement): void {
        popover?.classList.toggle('hidden');
    }

    private fecharPopoverAoClicarFora(event: MouseEvent, botaoPopover: HTMLButtonElement, popover: HTMLDivElement) {
        const targetNode = event.target as Node;

        if (targetNode && !botaoPopover?.contains(targetNode) && !popover?.contains(targetNode)) {
            popover?.classList.add('hidden');
        }
    }

    private inicializarPopovers(): void {
        this.popoversTarefa = document.querySelectorAll('[id^="popover-tarefa-"]');
        this.botoesPopoverTarefa = document.querySelectorAll('[id^="botao-popover-tarefa-"]')
        this.botoesFecharPopover = document.querySelectorAll('[id^="botao-fechar-popover-tarefa-"]');
    }

    private adicionarEventosPopover(): void {

        if (this.popoversTarefa) {
            this.botoesPopoverTarefa?.forEach((botao, indice) => {
                botao.addEventListener("click", () => {
                    const popover = this.popoversTarefa?.[indice];
                    this.trocarExibicaoPopover(popover as HTMLDivElement)
                })
            })

            this.botoesFecharPopover?.forEach((botao, indice) => {
                botao.addEventListener("click", () => {
                    const popover = this.popoversTarefa?.[indice];
                    this.trocarExibicaoPopover(popover as HTMLDivElement)
                })
            })

            document.addEventListener('click', (evento: MouseEvent) => {
                this.botoesPopoverTarefa?.forEach((botao, indice) => {
                    const popover = this.popoversTarefa?.[indice];
                    this.fecharPopoverAoClicarFora(evento, botao as HTMLButtonElement, popover as HTMLDivElement);
                })
            })
        }

    }
}

const interfaceGrafica = new InterfaceGrafica();

const botaoEditarTarefa = document.getElementById("botao-editar-tarefa");
const dialogEditarTarefa = document.getElementById("dialog-editar-tarefa");
const botaoCancelarEditarTarefa = document.getElementById(
  "botao-cancelar-edicao"
);

console.log(botaoEditarTarefa);
console.log(dialogEditarTarefa);
console.log(botaoCancelarEditarTarefa);

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
