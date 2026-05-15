# Johnny Fairways Product Metafields

The product template reads these product metafields when present. All use the `custom` namespace.

| Key | Suggested type | Used by |
| --- | --- | --- |
| `product_story_eyebrow` | Single line text | Product editorial eyebrow |
| `product_story_heading` | Single line text | Product editorial heading |
| `product_story_body` | Rich text | Product editorial body |
| `product_story_image` | File, image | Product editorial image |
| `fit_notes` | Rich text | Product details row |
| `fabric_notes` | Rich text | Product details row |
| `care_notes` | Rich text | Product details row |
| `editorial_image_1` | File, image | Product image band |
| `editorial_image_2` | File, image | Product image band |
| `editorial_image_3` | File, image | Product image band |

Each section has fallback content, so products will still render before metafields are populated.
