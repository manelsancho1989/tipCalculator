import { formatCurrency } from "../helpers"
import { MenuItem, OrderITem } from "../types"

type OrderContentsProp = {
    order: OrderITem[],
    removeItem: (id: MenuItem['id']) => void
}
export default function OrderContent({ order, removeItem }: OrderContentsProp) {
    return (
        <div>
            <h2 className="text-4xl font-black">Consumo</h2>
            <div className="space-y-3 mt-5">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black">{item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                        </div>
                        <button
                            className="bg-red-700 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => removeItem(item.id)}
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
