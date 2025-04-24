export function addItem() {
  const form = document.getElementById('itemForm');
  form.addEventListener('submit', function (event) {
  const item = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      price: document.getElementById('price').value,
      imageUrl: document.getElementById('imageUrl').value,
      link: document.getElementById('link').value
    };
  });
  return (
    <>
      <div class="container mt-4">
        <form id="itemForm">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" name="title" required></input>
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
          </div>

          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" name="price" required></input>
          </div>

          <div class="mb-3">
            <label for="imageUrl" class="form-label">Image URL</label>
            <input type="url" class="form-control" id="imageUrl" name="imageUrl" required></input>
          </div>

          <div class="mb-3">
            <label for="link" class="form-label">Product Link</label>
            <input type="url" class="form-control" id="link" name="link" required></input>
          </div>

          <button type="submit" class="btn btn-primary">Add Item</button>
        </form>
      </div>

    </>
  );
}