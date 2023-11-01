Tirsa Christina, [29/10/2023 7:02 pm]
<script>
export default{
 name: 'Filter'
}

</script>

<template>
  
  <div>
        <p style="font-size: large;" class="m-4">Result for Service Name</p>
      </div>
      

      <!-- dropwdowns -->
      <div class="dropdown m-4">
        <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item text-light" type="button">All Categories</button></li>
          <li><button class="dropdown-item text-light" type="button">Health</button></li>
          <li><button class="dropdown-item text-light" type="button">Fashion</button></li>
        </ul>


        <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Location
        </button>
        <ul class="dropdown-menu">
            <!-- <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li> -->
            <div class="m-2">
              <ul class="list-group">
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                <label class="form-check-label" for="firstCheckbox">Top Rated Sellers</label>
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
                <label class="form-check-label" for="secondCheckbox">Level 1</label>
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
                <label class="form-check-label" for="thirdCheckbox">Level 2</label>
              </li>
              <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
                <label class="form-check-label" for="thirdCheckbox">New Sellers</label>
              </li>
            </ul>
          </div>

          </ul>


<button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Budget
        </button>
        <ul class="dropdown-menu">
          <div class="m-2">
          <ul class="list-group">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
              <label class="form-check-label" for="firstRadio">Value <span class="text-body-tertiary"> Under SGD 179</span></label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
              <label class="form-check-label" for="secondRadio">Mid-range <span class="text-body-tertiary"> Under SGD 179 - SGD 251</span></label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
              <label class="form-check-label" for="thirdRadio">High-end <span class="text-body-tertiary"> Under SGD 251 and above</span></label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
              <label class="form-check-label" for="thirdRadio">Custom</label>
              <div>
                <p class="text-body-tertiary">MIN</p>
                <input type="number" id="replyNumber" placeholder="Any"/><i class="m-1"> S$</i>
                <p class="text-body-tertiary">MAX</p>
                <input type="number" id="replyNumber" placeholder="Any"/><i class="m-1"> S$</i>
              </div>
            </li>
          </ul>
        </div>
          </ul>
      </div>
      
      <div class="flex flex-items-center flex-wrap">
        <div class="numberOfService tbody-5 m-4">2000 services available</div>
      </div>

      <div class="d-flex dropdown justify-content-end">
        <span class="d-flex justify-content-end m-3">Sort by:</span>
        <button class="btn btn-success dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Relevance
        </button>
        <ul class="dropdown-menu">
        <li><button class="dropdown-item text-light" type="button">Recommended</button></li>
        <li><button class="dropdown-item text-light" type="button">Best Selling</button></li>
        <li><button class="dropdown-item text-light" type="button">Newest Arrivals</button></li>
        </ul>
    </div>

</template>