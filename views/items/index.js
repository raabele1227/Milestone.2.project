
    <% var items = this.model.get('items');
var roasts = this.model.get('roasts');%>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Trade Items</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="/trades">All</a>
                    </li>
                    <% roasts.forEach(function(roast) { %>

                        <><li class="nav-item">
                            <a class="nav-link" href="/trades/<%= roast %>">< />%= roast %></a>
                        </li>< /></> % }); %>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Roast Type</th>
                            <th>Origin</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <% items.forEach(function(item) { %>

                            <><tr>
                                <td>< />%= item.name %{">"}</td>
                                <td>< />%= item.roastType %{">"}</td>
                                <td>< />%= item.origin %{">"}</td>
                                <td>< />%= item.price %{">"}</td>
                                <td>< />%= item.quantity %{">"}</td>
                                <td>
                                    <a href="/trades/<%= item.id %>" class="btn btn-primary">View</a>
                                    <a href="/trades/<%= item.id %>/edit" class="btn btn-warning">Edit</a>
                                    <a href="/trades/<%= item.id %>/delete" class="btn btn-danger">Delete</a>
                                </td>
                            </tr>< /></>% }); %>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

