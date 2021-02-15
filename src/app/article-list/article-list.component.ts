import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';
import { ARTICLES } from '../model/mock-articles';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }

}
