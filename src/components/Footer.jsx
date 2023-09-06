import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
            <div class="container footer">
                <div class="row">
                    <div class="col-md-4 text-center">
                        <p class="fw-bold"><a href="/">Monogaga</a></p>
                        <p><a href="/">Baie des sirene</a></p>
                        <p><a href="/"> Monogaga Heights, 24 Street</a></p>
                        <p><a href="/">15th Floor, Burnny Drive</a></p>
                    </div>
                    <div class="col-md-4 text-center">
                        <p class="fw-bold"><a href="/">SPACE</a></p>
                        <p><a href="/">Ego</a></p>
                        <p><a href="/">Stratosphere Drive</a></p>
                    </div>
                    <div class="col-md-4 text-center">
                        <p class="fw-bold"><a href="/">TABET</a></p>
                        <p><a href="/">Ria-as</a></p>
                        <p><a href="/">Sorcery Sanctuary</a></p>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}
