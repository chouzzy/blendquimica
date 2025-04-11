
const whatsappNumber = 5516991790291
const mapsLink = "https://www.google.com/maps/place/Av.+Prof.+Othon+Gama+D'E%C3%A7a,+677+-+Centro,+Florian%C3%B3polis+-+SC,+88015-240/@-27.589685,-48.5521411,986m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95273818ef44cf45:0x820c90460fe96ac6!8m2!3d-27.589685!4d-48.5521411!16s%2Fg%2F11c51w2ntx?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
export function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .normalize("NFD") // Normaliza a string, separando letras e acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .replace(/\s+/g, '-')           // Substitui espaços por hífens
        .replace(/[^\w\-]+/g, '')       // Remove caracteres não alfanuméricos, exceto hífen
        .replace(/\-\-+/g, '-')         // Substitui múltiplos hífens por um único hífen
        .replace(/^-+/, '')             // Remove hífens do início
        .replace(/-+$/, '');            // Remove hífens do final
}


const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Elemento com ID "${id}" não encontrado.`);
    }
};

const whatsappLink = (path?:string) => {

    if (path === '/meta') {
        return 'https://w.app/id87ex'
    }

    return `https://api.whatsapp.com/send/?phone=5516991790291&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+Google%21+Pode+me+ajudar%3F+%5BFavor+n%C3%A3o+apagar+essa+mensagem+para+identifica%C3%A7%C3%A3o%5D&type=phone_number&app_absent=0`
}


export { scrollToSection, whatsappLink, whatsappNumber, mapsLink }