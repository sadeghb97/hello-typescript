//class haye abstract
/* keyworde readonly: faghat dar constructor mitavan dar in property ha taghir ijad kard
dar baghie mavared faghat khandani hastand */
//keyworde static -> mesle hame zaban haye sheygara
abstract class Movie {
  static ACTION_MOVIE: number = 1
  static COMEDY_MOVIE: number = 2

  constructor(readonly id: number, public name: string, public year: number){}

  abstract print() : void
}

class IranMovie extends Movie {
  print(): void {
    console.log(`Iran: ${this.name} - ${this.year}`);
  }
}

let movie: Movie = new IranMovie(2510, "A Seperation", 2014)
movie.print()
console.log(Movie.ACTION_MOVIE)
console.log(Movie.COMEDY_MOVIE)
