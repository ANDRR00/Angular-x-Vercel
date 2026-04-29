import { Component, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";
import { ContactForm } from "./contact-form/contact-form";
import { PostsEnvironment } from "./posts-environment/posts-environment";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, ContactForm, PostsEnvironment],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('NewStuff');

}
