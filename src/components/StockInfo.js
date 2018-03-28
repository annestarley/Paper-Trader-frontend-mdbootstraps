import React from 'react'

const StockInfo = () => {
  return (
    <div>
      <ul class="nav md-pills nav-justified pills-secondary">
      <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#panel4" role="tab">Active</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#panel11" role="tab">Link</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#panel12" role="tab">Link</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#panel13" role="tab">Help</a>
      </li>
  </ul>

  <div class="tab-content">

      <div class="tab-pane fade in show active" id="panel11" role="tabpanel">
          <br></br>

          <p>1</p>

      </div>

      <div class="tab-pane fade" id="panel12" role="tabpanel">
          <br></br>

          <p>2</p>
          <p>3</p>

      </div>

      <div class="tab-pane fade" id="panel13" role="tabpanel">
          <br></br>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
              porro voluptate odit minima.</p>

      </div>

      <div class="tab-pane fade" id="panel14" role="tabpanel">
          <br></br>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
              porro voluptate odit minima.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
              porro voluptate odit minima.</p>

      </div>

  </div>
    </div>
  )
}

export default StockInfo
