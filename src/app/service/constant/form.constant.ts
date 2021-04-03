import { Validators } from "@angular/forms"

const FILM_FORM = {
  title: ['', [Validators.required, Validators.maxLength(50)]],
  overview: ['', [Validators.required, Validators.maxLength(500)]],
  adult: [false],
  favourite: [false],
  spoken_languages: [[], Validators.required]
}

export { FILM_FORM }
