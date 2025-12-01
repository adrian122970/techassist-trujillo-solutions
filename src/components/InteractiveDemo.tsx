import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Menu, 
  Search, 
  Plus, 
  Minus, 
  CreditCard, 
  Package,
  UtensilsCrossed,
  CheckCircle2,
  Clock,
  Shield,
  Camera,
  AlertTriangle,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Hotel,
  Calendar,
  MapPin,
  Star,
  Stethoscope,
  UserCircle,
  ClipboardList,
  PackageCheck,
  AlertCircle,
  TrendingDown
} from "lucide-react";

interface InteractiveDemoProps {
  category: string;
  projectTitle: string;
}

// E-Commerce Demo
const ECommerceDemo = () => {
  const [cartItems, setCartItems] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = () => {
    setCartItems(cartItems + quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-xl p-6 space-y-4">
      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-xl">TechStore</h3>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon"><Search className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartItems > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
              >
                {cartItems}
              </motion.span>
            )}
          </Button>
          <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
        </div>
      </div>

      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-900 rounded-lg mb-4 flex items-center justify-center">
          <Package className="h-24 w-24 text-blue-600 dark:text-blue-300" />
        </div>
        <h4 className="font-bold text-lg mb-2">Laptop Premium</h4>
        <p className="text-2xl font-bold text-primary mb-4">$1,299.99</p>
        
        <div className="flex items-center gap-3 mb-4">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-semibold text-lg w-12 text-center">{quantity}</span>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Button 
          className="w-full" 
          onClick={addToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al Carrito
        </Button>
      </motion.div>

      {cartItems > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button 
            className="w-full" 
            size="lg"
            onClick={() => setShowCheckout(!showCheckout)}
          >
            <CreditCard className="h-5 w-5 mr-2" />
            Proceder al Pago ({cartItems} items)
          </Button>
        </motion.div>
      )}

      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border-2 border-green-500"
          >
            <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-2" />
            <p className="text-center font-semibold text-green-700 dark:text-green-300">
              ¡Pedido Procesado Exitosamente!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Restaurant Demo
const RestaurantDemo = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [orderStatus, setOrderStatus] = useState<"selecting" | "confirmed" | "preparing">("selecting");

  const menuItems = [
    { id: "1", name: "Hamburguesa Clásica", price: "$12.99", icon: "🍔" },
    { id: "2", name: "Pizza Margherita", price: "$15.99", icon: "🍕" },
    { id: "3", name: "Ensalada César", price: "$9.99", icon: "🥗" },
    { id: "4", name: "Pasta Alfredo", price: "$13.99", icon: "🍝" }
  ];

  const toggleItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const confirmOrder = () => {
    setOrderStatus("confirmed");
    setTimeout(() => setOrderStatus("preparing"), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-xl p-6 space-y-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <UtensilsCrossed className="h-6 w-6 text-orange-500" />
          Restaurant Digital Menu
        </h3>
      </div>

      {orderStatus === "selecting" && (
        <>
          <div className="grid grid-cols-2 gap-3">
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleItem(item.id)}
                className={`bg-white dark:bg-gray-800 rounded-lg p-4 cursor-pointer border-2 transition-all ${
                  selectedItems.includes(item.id) 
                    ? "border-orange-500 shadow-lg" 
                    : "border-transparent"
                }`}
              >
                <div className="text-4xl mb-2 text-center">{item.icon}</div>
                <h4 className="font-semibold text-sm text-center">{item.name}</h4>
                <p className="text-center text-primary font-bold">{item.price}</p>
              </motion.div>
            ))}
          </div>

          {selectedItems.length > 0 && (
            <Button 
              className="w-full" 
              size="lg"
              onClick={confirmOrder}
            >
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Confirmar Pedido ({selectedItems.length} items)
            </Button>
          )}
        </>
      )}

      {orderStatus === "confirmed" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 dark:bg-green-950/20 rounded-lg p-8 text-center"
        >
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h4 className="font-bold text-xl mb-2">¡Pedido Confirmado!</h4>
          <p className="text-muted-foreground">Preparando tu orden...</p>
        </motion.div>
      )}

      {orderStatus === "preparing" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-8 text-center"
        >
          <Clock className="h-16 w-16 text-orange-500 mx-auto mb-4 animate-spin" />
          <h4 className="font-bold text-xl mb-2">En Preparación</h4>
          <p className="text-muted-foreground">Tiempo estimado: 15 minutos</p>
          <div className="mt-4 bg-white dark:bg-gray-800 rounded-full h-3 overflow-hidden">
            <motion.div 
              className="h-full bg-orange-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Security Demo
const SecurityDemo = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: "warning", message: "Intento de acceso no autorizado - Puerta Principal", time: "Hace 2 min" },
    { id: 2, type: "info", message: "Cámara 3 - Movimiento detectado", time: "Hace 5 min" },
    { id: 3, type: "success", message: "Sistema funcionando correctamente", time: "Hace 10 min" }
  ]);
  const [cameraView, setCameraView] = useState(1);

  return (
    <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-xl p-6 space-y-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <Shield className="h-6 w-6 text-red-500" />
          Sistema de Seguridad
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((cam) => (
          <Button
            key={cam}
            variant={cameraView === cam ? "default" : "outline"}
            size="sm"
            onClick={() => setCameraView(cam)}
            className="flex items-center gap-1"
          >
            <Camera className="h-4 w-4" />
            Cam {cam}
          </Button>
        ))}
      </div>

      <motion.div 
        key={cameraView}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Camera className="h-24 w-24 text-gray-600" />
        </div>
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
          <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
          EN VIVO
        </div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
          Cámara {cameraView}
        </div>
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
          {new Date().toLocaleTimeString()}
        </div>
      </motion.div>

      <div className="space-y-2">
        <h4 className="font-semibold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          Alertas Recientes
        </h4>
        {alerts.map((alert) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`bg-white dark:bg-gray-800 rounded-lg p-3 border-l-4 ${
              alert.type === "warning" ? "border-yellow-500" :
              alert.type === "info" ? "border-blue-500" :
              "border-green-500"
            }`}
          >
            <p className="text-sm font-medium">{alert.message}</p>
            <p className="text-xs text-muted-foreground">{alert.time}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Analytics Dashboard Demo
const AnalyticsDemo = () => {
  const [activeMetric, setActiveMetric] = useState<"sales" | "users" | "growth">("sales");

  const metrics = {
    sales: { value: "$45,231", change: "+12.5%", icon: DollarSign, color: "text-green-500" },
    users: { value: "8,234", change: "+8.2%", icon: Users, color: "text-blue-500" },
    growth: { value: "23.4%", change: "+5.1%", icon: TrendingUp, color: "text-purple-500" }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-xl p-6 space-y-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-purple-500" />
          Panel de Analytics
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {Object.entries(metrics).map(([key, metric]) => {
          const Icon = metric.icon;
          const isActive = activeMetric === key;
          return (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveMetric(key as any)}
              className={`bg-white dark:bg-gray-800 rounded-lg p-4 cursor-pointer transition-all ${
                isActive ? "ring-2 ring-primary shadow-lg" : ""
              }`}
            >
              <Icon className={`h-8 w-8 mb-2 ${metric.color}`} />
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-sm text-green-500 font-semibold">{metric.change}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        key={activeMetric}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6"
      >
        <h4 className="font-semibold mb-4 capitalize">{activeMetric} - Últimos 7 días</h4>
        <div className="flex items-end justify-between h-40 gap-2">
          {[65, 75, 60, 85, 70, 90, 95].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t-lg"
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Lun</span>
          <span>Mar</span>
          <span>Mié</span>
          <span>Jue</span>
          <span>Vie</span>
          <span>Sáb</span>
          <span>Dom</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Tasa de Conversión</p>
          <p className="text-2xl font-bold">3.24%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Tiempo Promedio</p>
          <p className="text-2xl font-bold">4:32</p>
        </div>
      </div>
    </div>
  );
};

// Hotel Reservation Demo
const HotelReservationDemo = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [reservationStatus, setReservationStatus] = useState<"browsing" | "booking" | "confirmed">("browsing");

  const rooms = [
    { 
      id: "1", 
      name: "Habitación Estándar", 
      price: "$80", 
      amenities: ["WiFi", "TV", "Aire Acond."],
      rating: 4.2,
      available: 5
    },
    { 
      id: "2", 
      name: "Suite Deluxe", 
      price: "$150", 
      amenities: ["WiFi", "Jacuzzi", "Vista al Mar"],
      rating: 4.8,
      available: 2
    },
    { 
      id: "3", 
      name: "Suite Presidencial", 
      price: "$300", 
      amenities: ["WiFi", "Balcón", "Servicio 24h"],
      rating: 4.9,
      available: 1
    }
  ];

  const handleBooking = () => {
    if (selectedRoom && checkIn && checkOut) {
      setReservationStatus("booking");
      setTimeout(() => setReservationStatus("confirmed"), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20 rounded-xl p-6 space-y-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <Hotel className="h-6 w-6 text-blue-500" />
          Sistema de Reservas - Hotel Paradise
        </h3>
      </div>

      {reservationStatus === "browsing" && (
        <>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium mb-1 block">Check-in</label>
                <Input 
                  type="date" 
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Check-out</label>
                <Input 
                  type="date" 
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Huéspedes</label>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-semibold text-lg w-12 text-center">{guests}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setGuests(Math.min(10, guests + 1))}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedRoom(room.id)}
                className={`bg-white dark:bg-gray-800 rounded-lg p-4 cursor-pointer border-2 transition-all ${
                  selectedRoom === room.id 
                    ? "border-blue-500 shadow-lg" 
                    : "border-transparent"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-lg">{room.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-yellow-500 mb-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-medium">{room.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{room.price}</p>
                    <p className="text-xs text-muted-foreground">por noche</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {room.amenities.map((amenity, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {room.available} habitaciones disponibles
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedRoom && checkIn && checkOut && (
            <Button 
              className="w-full" 
              size="lg"
              onClick={handleBooking}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Confirmar Reservación
            </Button>
          )}
        </>
      )}

      {reservationStatus === "booking" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-8 text-center"
        >
          <Clock className="h-16 w-16 text-blue-500 mx-auto mb-4 animate-spin" />
          <h4 className="font-bold text-xl mb-2">Procesando Reserva...</h4>
          <p className="text-muted-foreground">Verificando disponibilidad</p>
        </motion.div>
      )}

      {reservationStatus === "confirmed" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 dark:bg-green-950/20 rounded-lg p-8 text-center space-y-4"
        >
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
          <div>
            <h4 className="font-bold text-xl mb-2">¡Reserva Confirmada!</h4>
            <p className="text-muted-foreground mb-4">Código de reserva: #HTL{Math.floor(Math.random() * 10000)}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Check-in:</span>
              <span className="font-semibold">{checkIn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Check-out:</span>
              <span className="font-semibold">{checkOut}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Huéspedes:</span>
              <span className="font-semibold">{guests}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Inventory Management Demo
const InventoryManagementDemo = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop HP", stock: 15, minStock: 10, status: "good" },
    { id: 2, name: "Mouse Logitech", stock: 8, minStock: 15, status: "low" },
    { id: 3, name: "Teclado Mecánico", stock: 3, minStock: 10, status: "critical" },
    { id: 4, name: "Monitor 24\"", stock: 12, minStock: 8, status: "good" }
  ]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(0);
  const [action, setAction] = useState<"add" | "remove" | null>(null);

  const updateStock = () => {
    if (selectedProduct && quantity > 0) {
      setProducts(prev => prev.map(p => {
        if (p.id === selectedProduct) {
          const newStock = action === "add" ? p.stock + quantity : Math.max(0, p.stock - quantity);
          let status = "good";
          if (newStock < p.minStock / 2) status = "critical";
          else if (newStock < p.minStock) status = "low";
          
          return { ...p, stock: newStock, status };
        }
        return p;
      }));
      
      setSelectedProduct(null);
      setQuantity(0);
      setAction(null);
    }
  };

  const criticalCount = products.filter(p => p.status === "critical").length;
  const lowCount = products.filter(p => p.status === "low").length;

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/20 dark:to-teal-900/20 rounded-xl p-6 space-y-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <PackageCheck className="h-6 w-6 text-emerald-500" />
          Gestión de Inventario
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <Package className="h-8 w-8 text-blue-500 mb-2" />
          <p className="text-2xl font-bold">{products.length}</p>
          <p className="text-sm text-muted-foreground">Productos</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <AlertTriangle className="h-8 w-8 text-yellow-500 mb-2" />
          <p className="text-2xl font-bold">{lowCount}</p>
          <p className="text-sm text-muted-foreground">Stock Bajo</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <AlertCircle className="h-8 w-8 text-red-500 mb-2" />
          <p className="text-2xl font-bold">{criticalCount}</p>
          <p className="text-sm text-muted-foreground">Crítico</p>
        </div>
      </div>

      <div className="space-y-2">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 transition-all"
            style={{
              borderColor: 
                product.status === "critical" ? "#ef4444" :
                product.status === "low" ? "#f59e0b" :
                "#10b981"
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex-1">
                <h4 className="font-semibold">{product.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    product.status === "critical" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300" :
                    product.status === "low" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300" :
                    "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                  }`}>
                    {product.status === "critical" ? "Crítico" :
                     product.status === "low" ? "Stock Bajo" :
                     "Normal"}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{product.stock}</p>
                <p className="text-xs text-muted-foreground">unidades</p>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setSelectedProduct(product.id);
                  setAction("add");
                }}
              >
                <Plus className="h-4 w-4 mr-1" />
                Agregar
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setSelectedProduct(product.id);
                  setAction("remove");
                }}
              >
                <Minus className="h-4 w-4 mr-1" />
                Retirar
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProduct && action && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-primary"
          >
            <h4 className="font-semibold mb-3">
              {action === "add" ? "Agregar Stock" : "Retirar Stock"}
            </h4>
            <div className="flex items-center gap-3 mb-3">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(0, parseInt(e.target.value) || 0))}
                className="text-center"
                min="0"
              />
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={updateStock}
                disabled={quantity === 0}
              >
                Confirmar
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setSelectedProduct(null);
                  setQuantity(0);
                  setAction(null);
                }}
              >
                Cancelar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Clinic Appointment Demo
const ClinicAppointmentDemo = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointmentStatus, setAppointmentStatus] = useState<"selecting" | "confirming" | "confirmed">("selecting");

  const doctors = [
    { id: "1", name: "Dr. María García", specialty: "Cardiología", available: true },
    { id: "2", name: "Dr. Juan Pérez", specialty: "Pediatría", available: true },
    { id: "3", name: "Dra. Ana López", specialty: "Dermatología", available: false },
    { id: "4", name: "Dr. Carlos Ruiz", specialty: "Traumatología", available: true }
  ];

  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  const confirmAppointment = () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      setAppointmentStatus("confirming");
      setTimeout(() => setAppointmentStatus("confirmed"), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-950/20 dark:to-blue-900/20 rounded-xl p-6 space-y-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <Stethoscope className="h-6 w-6 text-cyan-500" />
          Sistema de Citas - Clínica Salud
        </h3>
      </div>

      {appointmentStatus === "selecting" && (
        <>
          <div>
            <h4 className="font-semibold mb-3">Selecciona un Especialista:</h4>
            <div className="grid grid-cols-2 gap-3">
              {doctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  whileHover={{ scale: doctor.available ? 1.05 : 1 }}
                  whileTap={{ scale: doctor.available ? 0.95 : 1 }}
                  onClick={() => doctor.available && setSelectedDoctor(doctor.id)}
                  className={`bg-white dark:bg-gray-800 rounded-lg p-4 cursor-pointer border-2 transition-all ${
                    !doctor.available ? "opacity-50 cursor-not-allowed" :
                    selectedDoctor === doctor.id ? "border-cyan-500 shadow-lg" : "border-transparent"
                  }`}
                >
                  <UserCircle className={`h-12 w-12 mx-auto mb-2 ${
                    selectedDoctor === doctor.id ? "text-cyan-500" : "text-muted-foreground"
                  }`} />
                  <h5 className="font-semibold text-center text-sm">{doctor.name}</h5>
                  <p className="text-xs text-center text-muted-foreground">{doctor.specialty}</p>
                  {!doctor.available && (
                    <p className="text-xs text-center text-red-500 mt-1">No disponible</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {selectedDoctor && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-3"
            >
              <div>
                <label className="text-sm font-medium mb-2 block">Fecha:</label>
                <Input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h4 className="font-semibold mb-2">Horarios Disponibles:</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="text-xs"
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}

              {selectedTime && (
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={confirmAppointment}
                >
                  <ClipboardList className="h-5 w-5 mr-2" />
                  Agendar Cita
                </Button>
              )}
            </motion.div>
          )}
        </>
      )}

      {appointmentStatus === "confirming" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-cyan-50 dark:bg-cyan-950/20 rounded-lg p-8 text-center"
        >
          <Clock className="h-16 w-16 text-cyan-500 mx-auto mb-4 animate-spin" />
          <h4 className="font-bold text-xl mb-2">Agendando Cita...</h4>
          <p className="text-muted-foreground">Confirmando disponibilidad</p>
        </motion.div>
      )}

      {appointmentStatus === "confirmed" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 dark:bg-green-950/20 rounded-lg p-8 text-center space-y-4"
        >
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
          <div>
            <h4 className="font-bold text-xl mb-2">¡Cita Confirmada!</h4>
            <p className="text-muted-foreground mb-4">Código de cita: #MED{Math.floor(Math.random() * 10000)}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Doctor:</span>
              <span className="font-semibold">
                {doctors.find(d => d.id === selectedDoctor)?.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Fecha:</span>
              <span className="font-semibold">{selectedDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Hora:</span>
              <span className="font-semibold">{selectedTime}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            📧 Recordatorio enviado a tu email
          </p>
        </motion.div>
      )}
    </div>
  );
};

const InteractiveDemo = ({ category, projectTitle }: InteractiveDemoProps) => {
  const renderDemo = () => {
    switch (category) {
      case "web":
        if (projectTitle.includes("E-Commerce")) return <ECommerceDemo />;
        if (projectTitle.includes("Dashboard") || projectTitle.includes("Analytics")) return <AnalyticsDemo />;
        return <ECommerceDemo />;
      case "automation":
        return <RestaurantDemo />;
      case "security":
        return <SecurityDemo />;
      case "hospitality":
        return <HotelReservationDemo />;
      case "inventory":
        return <InventoryManagementDemo />;
      case "healthcare":
        return <ClinicAppointmentDemo />;
      default:
        return <AnalyticsDemo />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
        <p className="text-sm font-semibold text-primary flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Demo Interactiva - Prueba las funcionalidades
        </p>
      </div>
      {renderDemo()}
    </div>
  );
};

export default InteractiveDemo;
