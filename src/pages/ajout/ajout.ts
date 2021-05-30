import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';
const DATABASE_FILE_NAME: string = 'data.db';
/**
 * Generated class for the AjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html',
})
export class AjoutPage {

db: SQLiteObject;
  movies: string[] = [];
  titleMovie: string; 
  ratingMovie: number;
  descriptionMovie: string;
  categorieMovie: string;
  constructor(public navCtrl: NavController,    private sqlite: SQLite,
    private platform: Platform ) {
      this.platform.ready().then(() => {
        this.createDatabaseFile();
    });
  
  }


  private createDatabaseFile(): void {
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        console.log('Bdd créée !');
        this.db = db;
        this.createTables();
      })
      .catch(e => console.log(e));
  }
  private createTables(): void {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `MOVIES` ( `idMovies` INTEGER NOT NULL, `name` TEXT NOT NULL, `eval` INTEGER NOT NULL DEFAULT 3, `desc` TEXT, `categoryId` INTEGER, PRIMARY KEY(`idMovies`), FOREIGN KEY(`categoryId`) REFERENCES idCategories )', {})
      .then(() => {
        console.log('Table Movies created !');
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `CATEGORIES` ( `idCategories` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`name` TEXT NOT NULL )', {})
          .then(() => console.log('Table Categories created !'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }


  public saveMyFilm() {
    console.log('Movie name -> ' + this.titleMovie);
    console.log('Rating -> ' + this.ratingMovie + '/5');
    console.log('Description -> ' + this.descriptionMovie);
    console.log('Categorie -> ' + this.categorieMovie);
    // INSERT INTO `CATEGORIES` (name) VALUES('Test');
    // INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES ('Nom film', 3, 'Description', 1)
    this.db.executeSql('INSERT INTO `CATEGORIES` (name) VALUES(\''+ this.categorieMovie + '\')', {})
      .then(() => {
        console.log('Categorie inserted !');
        this.db.executeSql('INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES (\'' + this.titleMovie + '\', \'' +
          this.ratingMovie + '\', \'' + this.descriptionMovie + '\', last_insert_rowid())', {})
          .then(() => console.log('Movie inserted !'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
  public retrieveFilms() {
    
    this.movies = [];
    this.db.executeSql('SELECT name FROM `MOVIES`', {})
      .then((data) => {
        if (data == null) {
          return;
        }
        if (data.rows) {
          if (data.rows.length > 0) {
            for (var i = 0; i < data.rows.length; i++) {
              this.movies.push(data.rows.item(i).name);
            }
          }
        }
      });
  }
}
