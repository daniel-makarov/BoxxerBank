function App() {
  return (
    <div class="container">
      <center><h1>BoxxerBank</h1></center>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col">
            <h3>Greetings Family!</h3>
            <h3>Contract Balance: 0</h3>
          </div>

          <div class="col">
          <form>
            <div class="mb-1">
              <input type="number" class="form-control" placeholder="0" value="test"/>
              </div>
            <button type="submit" class="btn btn-success">Deposit</button>
          </form>
          <br></br>
          <form>
            <div class="mb-1">
              <input type="number" class="form-control" placeholder="0" value="0"/>
              </div>
            <button type="submit" class="btn btn-primary">Withdraw</button>
          </form>

          <form class="mt-5">
            <div class="mb-3">
              <input type="text" class="form-control" value="hi"/>
              </div>
            <button type="submit" class="btn btn-dark">Change Greeting Message</button>
          </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
