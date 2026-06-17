import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Message {
  text: string;
  type: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  isOpen = false;
  userInput = '';
  isTyping = false;

  messages: Message[] = [
    { text: "Bonjour ! Je suis BlaDino, l'assistant de KenzBladi 🛍️ Comment puis-je vous aider aujourd'hui ?", type: 'bot' }
  ];

  private apiUrl = 'http://127.0.0.1:8000/api/chat';

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({ text, type: 'user' });
    this.userInput = '';
    this.isTyping = true;

    this.http.post<{ reponse: string }>(this.apiUrl, { question: text })
      .subscribe({
        next: (data) => {
          this.isTyping = false;
          this.messages.push({ text: data.reponse, type: 'bot' });
        },
        error: () => {
          this.isTyping = false;
          this.messages.push({ text: '❌ Erreur de connexion au serveur.', type: 'bot' });
        }
      });
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.sendMessage();
  }
}