import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import { StatsCards } from "@/components/stats-cards";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your store performance.
        </p>
      </div>
      <StatsCards />
      <ChartAreaInteractive />

      {/* Recent Orders Section */}
      <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {[
              {
                id: "#3210",
                customer: "John Doe",
                amount: "$299.99",
                status: "Processing",
              },
              {
                id: "#3209",
                customer: "Jane Smith",
                amount: "$149.99",
                status: "Shipped",
              },
              {
                id: "#3208",
                customer: "Bob Johnson",
                amount: "$89.99",
                status: "Delivered",
              },
              {
                id: "#3207",
                customer: "Alice Brown",
                amount: "$199.99",
                status: "Processing",
              },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.customer}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.amount}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products Section */}
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Top Products</h3>
          <div className="space-y-4">
            {[
              { name: "iPhone 15 Pro", sales: 45, revenue: "$44,999.55" },
              { name: "MacBook Air M3", sales: 23, revenue: "$29,899.77" },
              { name: "Nike Air Max 270", sales: 67, revenue: "$10,049.33" },
              {
                name: "KitchenAid Stand Mixer",
                sales: 12,
                revenue: "$4,559.88",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.sales} sales
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
