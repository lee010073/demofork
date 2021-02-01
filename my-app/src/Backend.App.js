const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dashboardDB", { useNewUrlParser: true });

//First Document for purchase order 
const purchase_orderSchema = new mongoose.Schema({
    items: {
        type: String,
        required: [true, "please enter the name"]
    },
    unit_price: {
        type: Number,
        required: [true, "please enter the unit price"]
    },
    quantity: {
        type: Number,
        required: [true, "please enter the quantity"]
    },
    warehouse_delivery_address: {
        type: String,
        required: [true, "please enter the warehouse delivery address"]
    }
})


const Purchase_order = mongoose.model("Purchase_order", purchase_orderSchema);

//e.g. we need to create a new purchase order
const order1 = new Purchase_order({
    items: "Apple",
    unit_price: 10,
    quantity: 5,
    warehouse_delivery_address: "Hong Kong West"
})

order1.save();

//Second Document for outbound shipment 
const outbound_shipmentSchema = new mongoose.Schema({
    manufactured: Boolean,
    exit_factory: Boolean,
    delivered_to_airport: Boolean,
    confirmed_purhcase_order: purchase_orderSchema
})

const Outbound_shipment = mongoose.model("Outbound_shipment", outbound_shipmentSchema);

//e.g. order1 is being processed to outbound shipment 
const outbound1 = new Outbound_shipment({
    manufactured: true,
    exit_factory: true,
    delivered_to_airport: true,
    confirmed_purchase_order: order1
})

outbound1.save();


//Third Document for inbound shipment
const inbound_shipmentSchema = new mongoose.Schema({
    delivered_to_warehouse: Boolean,
    repackaged: Boolean,
    stored: Boolean,
    confirmed_inbound_shipment: outbound_shipmentSchema,
})

const Inbound_Shipment = mongoose.model("Inbound_shipment", inbound_shipmentSchema);

//e.g. outbound shipment 1 is being processed to inbound shipment 
const inbound1 = new Inbound_Shipment({
    delivered_to_warehouse: true,
    repackaged: true,
    stored: true,
    confirmed_inbound_shipment: outbound1
})


//Fourth Document for customer purchase
const salesSchema = new mongoose.Schema({
    product: String,
    unit_price: Number,
    quantity: Number,
    customer_name: String,
    customer_address: String
})
const Sales = mongoose.model("Sales", salesSchema)

//For example the sales' details required Apple from the warehouse
const Sales1 = new Sales({
    product: "Apple",
    unit_price: 4,
    quantity: 1,
    customer_name: "Douglas",
    customer_address: "Kwun Tong"
})

Sales1.save();

