const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

const $Form = document.querySelector('form')
$Form.addEventListener('submit', (evento) => 
{
    evento.preventDefault();
    const Form = new FormData($Form)
    const CantidadString = Form.get('Cantidad')
    const Valor = Number(CantidadString);
    PokemonLoop(Valor);

})

function TemplatePokemon (images, name)
{
    let HTML = `
    <div class="Card" id="PokemonCard">
        <img src="${images}" alt="Pokemon-${name}">
        <h2>${name}</h2>
    </div>`

    RenderPokemon(HTML)
}

function RenderPokemon (InfoRenderizada)
{
    const TemplateHTML = document.createElement('main')
    TemplateHTML.innerHTML = InfoRenderizada;
    const Documento = document.querySelector('main');
    Documento.append(TemplateHTML);
}

function FetchToAPI (url) 
{
    fetch(url)
    .then((response) => {
        const data = response.json();
        return data
    })
    .then((response2) => {
        const Name = response2.forms[0].name;
        const Images = response2.sprites.front_default;
        TemplatePokemon(Images, Name)
    })
}

function PokemonLoop (Limite)
{
    if(Limite === NaN)
    {
        alert("Valor incorrecto!")
    
    }else
    {
        const Limpiar = document.querySelector('main')
        Limpiar.innerHTML = '';
        for(let i = 1; i <= Limite; i++)
        {
            FetchToAPI(`${URL_API}${i}`)
        }
    
    }  
}




