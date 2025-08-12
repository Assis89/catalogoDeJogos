import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface JogoSugerido {
  id: number;
  nome: string;
  tipo: string;
  ano: number;
  imagem: string;
  descricao: string;
  nota: number;
}

@Component({
  selector: 'app-carrossel-sugeridos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel-sugeridos.component.html',
  styleUrl: './carrossel-sugeridos.component.css'
})
export class CarrosselSugeridosComponent {
  jogosSugeridos: JogoSugerido[] = [
    {
      id: 1,
      nome: 'Cyberpunk 2077',
      tipo: 'RPG',
      ano: 2020,
      imagem: 'images/jogos/cyberpunk2077.jpg',
      descricao: 'Um RPG de ação em mundo aberto ambientado numa megalópole futurista.',
      nota: 8.5
    },
    {
      id: 2,
      nome: 'The Witcher 3',
      tipo: 'RPG',
      ano: 2015,
      imagem: 'images/jogos/thewitcher3.jpg',
      descricao: 'Uma aventura épica em um mundo de fantasia dark medieval.',
      nota: 9.3
    },
    {
      id: 3,
      nome: 'Valorant',
      tipo: 'FPS',
      ano: 2020,
      imagem: 'images/jogos/valorant.jpg',
      descricao: 'Shooter tático 5v5 com personagens únicos e habilidades especiais.',
      nota: 8.7
    },
    {
      id: 4,
      nome: 'League of Legends',
      tipo: 'MOBA',
      ano: 2009,
      imagem: 'images/jogos/leagueoflegends.jpg',
      descricao: 'O MOBA mais popular do mundo com milhões de jogadores.',
      nota: 8.9
    },
    {
      id: 5,
      nome: 'Elden Ring',
      tipo: 'Souls-like',
      ano: 2022,
      imagem: 'images/jogos/eldenring.jpg',
      descricao: 'Um jogo de ação RPG em mundo aberto com elementos souls-like.',
      nota: 9.5
    }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.jogosSugeridos.length;
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.jogosSugeridos.length - 1 : this.currentIndex - 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  getVisibleGames() {
    // Em desktop mostra 3 cards, em mobile mostra 1
    const isMobile = window.innerWidth < 768;
    const visibleCount = isMobile ? 1 : 3;
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (this.currentIndex + i) % this.jogosSugeridos.length;
      visible.push(this.jogosSugeridos[index]);
    }
    return visible;
  }

  onImageError(event: any) {
    console.log('Erro ao carregar imagem:', event.target.src);
    // Fallback para um gradiente CSS como placeholder
    event.target.style.display = 'none';
    event.target.parentElement.style.background = 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)';
    event.target.parentElement.style.display = 'flex';
    event.target.parentElement.style.alignItems = 'center';
    event.target.parentElement.style.justifyContent = 'center';
    event.target.parentElement.innerHTML = '<div style="font-size: 4rem; color: #00ffff;">🎮</div>';
  }
}
