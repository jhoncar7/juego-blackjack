import _ from 'underscore';
import './styles.css'


const cloud_carta = {
    '2D': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219602/BlackJack/2D_pt8zpv.png',
    'QS': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219602/BlackJack/QS_hyau5b.png',
    'QH': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219602/BlackJack/QH_g3z1uy.png',
    '2H': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219603/BlackJack/2H_yhjfde.png',
    'red_back': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219602/BlackJack/red_back_acjo84.png',
    '2C': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219602/BlackJack/2C_a3nwtd.png',
    'KD': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219602/BlackJack/KD_wlugck.png',
    'QD': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219602/BlackJack/QD_jryxfo.png',
    'KH': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219601/BlackJack/KH_olmkck.png',
    'JD': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219601/BlackJack/JD_saib6d.png',
    'QC': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219602/BlackJack/QC_pfw6l9.png',
    'KS': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219602/BlackJack/KS_qlyzm2.png',
    'KC': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219601/BlackJack/KC_xr6uca.png',
    'JS': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219601/BlackJack/JS_lso3zc.png',
    'JC': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219601/BlackJack/JC_fhz09u.png',
    'JH': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219601/BlackJack/JH_mldja3.png',
    'grey_back': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219601/BlackJack/grey_back_bxy2km.png',
    '10H': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219600/BlackJack/10H_t6npmm.png',
    'AD': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219600/BlackJack/AD_yvyv1g.png',
    '10S': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219600/BlackJack/10S_isyi8i.png',
    '9H': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219600/BlackJack/9H_a55mfk.png',
    '9S': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/9S_vlqy5t.png',
    '7D': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/7D_yudmig.png',
    'AC': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219600/BlackJack/AC_xbflwn.png',
    '10C': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219600/BlackJack/10C_xv6qac.png',
    '10D': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219600/BlackJack/10D_ggcrh3.png',
    '9D': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/9D_dyahup.png',
    '7S': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/7S_plbybv.png',
    '9C': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/9C_xamwic.png',
    '7C': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/7C_kn17y3.png',
    '8H': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/8H_wel0ew.png',
    'AH': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219601/BlackJack/AH_fpnuiz.png',
    'AS': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219600/BlackJack/AS_o6y355.png',
    '7H': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/7H_fcrnuj.png',
    '8S': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/8S_cniq2o.png',
    '8C': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/8C_xon7sl.png',
    '8D': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219599/BlackJack/8D_aexqjb.png',
    '6S': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219598/BlackJack/6S_qf7p0w.png',
    '5H': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219598/BlackJack/5H_cmfnz4.png',
    '6D': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219598/BlackJack/6D_muvym9.png',
    '5D': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219598/BlackJack/5D_g8bcs2.png',
    '6C': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219598/BlackJack/6C_hrzswk.png',
    '5S': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219598/BlackJack/5S_i9tjip.png',
    '6H': 'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219598/BlackJack/6H_wn422s.png',
    '5C':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/5C_mbi7lt.png',
    '4H':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/4H_oq8fnl.png',
    '4D':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/4D_ejhyvz.png',
    '4S':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/4S_cd0mic.png',
    '3D':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/3D_vfzcmf.png',
    '4C':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/4C_nfx32k.png',
    '3C':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/3C_xtl7ev.png',
    '3H':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/3H_dktbvf.png',
    '2S':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/2S_yu9fhk.png',
    '3S':'https://res.cloudinary.com/testpuebas2022/image/upload/v1664219597/BlackJack/3S_hbvgsm.png',
}



const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo'),
    puntosHTML = document.querySelectorAll('small'),
    divCartasJugadores = document.querySelectorAll('.divCartas');

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck()
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++)
        puntosJugadores.push(0)

    puntosHTML.forEach(elem => {
        elem.innerText = 0;
    })

    divCartasJugadores.forEach(elem => {
        elem.innerHTML = '';
    })
    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

const crearDeck = () => {
    deck = [];
    for (const tipo of tipos) {
        for (let i = 2; i <= 10; i++)
            deck.push(i + tipo)
        for (const esp of especiales)
            deck.push(esp + tipo)
    }
    return _.shuffle(deck)
}

const pedirCarta = () => {
    if (deck.length === 0)
        throw 'No hay cartas en el deck'
    return deck.shift()
}

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor))
        ? (valor === 'A') ? 11 : 10
        : valor * 1;

}

const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}

const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img')
    imgCarta.classList.add('carta')
    // cloud_carta
    // imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.src = cloud_carta[carta];
    divCartasJugadores[turno].append(imgCarta)
}

const determinarGanador = () => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos)
            alert('Nadie Gana 🤨🤔🤔')
        if (puntosMinimos > 21)
            alert('Thiago el vicioso gano 😀🎉🎊🎉')
        if (puntosComputadora > 21)
            alert('Vos le ganaste a thiago el vicioso 😀🎉🎊🎉')
        if (puntosMinimos < 21 && puntosComputadora < 21) {
            if (puntosMinimos > puntosComputadora)
                alert('os le ganaste a thiago el vicioso 😀🎉🎊🎉')
            else
                alert('Thiago el vicioso gano 😀🎉🎊🎉')
        }
    }, 500);
}
const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta();
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1)
        crearCarta(carta, puntosJugadores.length - 1)

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosMinimos <= 21) && (puntosComputadora <= puntosMinimos));

    determinarGanador();

}


btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    let puntosJugador = acumularPuntos(carta, 0)
    crearCarta(carta, 0)

    if (puntosJugador > 21) {
        btnPedir.disabled = true
        console.log('Lo siento, perdiste 😟')
        btnDetener.disabled = true
        turnoComputadora(puntosJugador)
    } else if (puntosJugador === 21) {
        console.log('21, genial 😀')
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugador)
    }
})

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true
    btnDetener.disabled = true
    turnoComputadora(puntosJugadores[0])
})

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
})
