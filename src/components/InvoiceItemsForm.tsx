"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useInvoice } from "@/context/InvoiceContext";
import { InvoiceItem } from "@/context/types";
import { v4 as uuidv4 } from 'uuid';

const InvoiceItemsForm = () => {
  const { state, dispatch } = useInvoice();

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: uuidv4(), 
      name: "HP x1000 Wired Optical Mouse",
      description: "FSN: ACCDBFEVHVDG3CMJ",
      quantity: 1,
      unitPrice: 250.0,
      taxAmount: 45.0,
      taxPercentage: 18,
      total: 295.0,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  return (
    <div className="space-y-4">
      {state.items  && state.items.map((item, index) => (
        <fieldset
          key={index}
          className="relative mb-4 rounded-lg border p-4 shadow"
        >
          <legend className="text-lg font-semibold text-gray-900 px-1">
            Item {index + 1}
          </legend>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`itemName-${index}`}>Name</Label>
              <div className="space-y-0.5">
                <Textarea
                  id={`itemName-${index}`}
                  placeholder="Item name"
                  rows={2}
                  value={item.name}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_ITEM",
                      payload: { index, item: { name: e.target.value } },
                    })
                  }
                />
                <p className="text-xs text-gray-500">
                  Enter the name of the item.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`itemDescription-${index}`}>Description</Label>
              <div className="space-y-0.5">
                <Textarea
                  id={`itemDescription-${index}`}
                  placeholder="Item Description"
                  rows={2}
                  value={item.description}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_ITEM",
                      payload: { index, item: { description: e.target.value } },
                    })
                  }
                />
                <p className="text-xs text-gray-500">
                  Enter the description of the item.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor={`qty-${index}`}>Quantity</Label>
                <div className="space-y-0.5">
                  <Input
                    id={`qty-${index}`}
                    type="number"
                    placeholder="Item Quantity"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_ITEM",
                        payload: {
                          index,
                          item: { quantity: Number(e.target.value) },
                        },
                      })
                    }
                  />
                  <p className="text-xs text-gray-500">Enter the quantity.</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`unit-${index}`}>Unit Price</Label>
                <div className="space-y-0.5">
                  <Input
                    id={`unit-${index}`}
                    placeholder="Item Unit"
                    value={item.unitPrice}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_ITEM",
                        payload: {
                          index,
                          item: { unitPrice: Number(e.target.value) },
                        },
                      })
                    }
                  />
                  <p className="text-xs text-gray-500">Enter the unit price.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor={`taxAmount-${index}`}>Tax Amount</Label>
                <div className="space-y-0.5">
                  <Input
                    id={`taxAmount-${index}`}
                    type="number"
                    placeholder="Item Tax Amount"
                    value={item.taxAmount}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_ITEM",
                        payload: {
                          index,
                          item: { taxAmount: Number(e.target.value) },
                        },
                      })
                    }
                  />
                  <p className="text-xs text-gray-500">Enter the tax amount.</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`taxPercentage-${index}`}>Tax Percentage</Label>
                <div className="space-y-0.5">
                  <Input
                    id={`taxPercentage-${index}`}
                    type="number"
                    placeholder="Item Tax Percentage"
                    value={item.taxPercentage}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_ITEM",
                        payload: {
                          index,
                          item: { taxPercentage: Number(e.target.value) },
                        },
                      })
                    }
                  />
                  <p className="text-xs text-gray-500">Enter the tax amount.</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`total-${index}`}>Total</Label>
              <div className="space-y-0.5">
                <Input
                  id={`total-${index}`}
                  type="number"
                  placeholder="Total"
                  value={item.total}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_ITEM",
                      payload: {
                        index,
                        item: { total: Number(e.target.value) },
                      },
                    })
                  }
                />
                <p className="text-xs text-gray-500">
                  Enter the total amount for the item.
                </p>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
          >
            Remove Item
          </Button>
        </fieldset>
      ))}
      <Button variant="outline" onClick={addItem}>
        <Plus className="mr-2 h-4 w-4" />
        Add invoice item
      </Button>
    </div>
  );
};

export default InvoiceItemsForm;
