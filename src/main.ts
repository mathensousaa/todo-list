import 'tailwindcss/tailwind.css';

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``

const botaoPopover = document.getElementById('botao-popover');
const popover = document.getElementById('popover');
const botaoFecharPopover = document.getElementById('botao-fechar-popover');

console.log(botaoFecharPopover)

botaoPopover?.addEventListener('click', () => {
    trocarExibicaoPopover();
})

botaoFecharPopover?.addEventListener('click', () => {
  trocarExibicaoPopover();
})

document.addEventListener('click', (event: MouseEvent) => {
    fecharPopoverAoClicarFora(event);
})

function trocarExibicaoPopover(): void {
    popover?.classList.toggle('hidden');
}

function fecharPopoverAoClicarFora(event: MouseEvent) {
    const targetNode = event.target as Node;
    
    if (targetNode && !botaoPopover?.contains(targetNode) && !popover?.contains(targetNode)) {
      popover?.classList.add('hidden');
    }
}