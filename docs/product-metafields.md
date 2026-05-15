# Johnny Fairways Product Metafields

The product template is based on the Figma frame `PDP / The Fairway Cap`. These product metafields are read when present. All use the `custom` namespace unless a section block is changed in the Shopify admin.

| Key | Suggested type | Used by |
| --- | --- | --- |
| `pdp_hero_heading` | Single line text | Hero headline |
| `pdp_hero_copy` | Multi-line text | Hero product copy |
| `pdp_hero_image` | File, image | Hero product image |
| `pdp_style` | Single line text | Spec strip |
| `pdp_fabric` | Single line text | Spec strip |
| `pdp_fit` | Single line text | Spec strip |
| `pdp_closure` | Single line text | Spec strip |
| `pdp_weight` | Single line text | Spec strip |
| `pdp_origin` | Single line text | Spec strip |
| `pdp_story_heading` | Single line text | Story section heading |
| `pdp_story_body` | Rich text | Story section body |
| `pdp_story_image` | File, image | Story section image |
| `pdp_feature_image_1` through `pdp_feature_image_3` | File, image | Craft feature grid |
| `pdp_feature_copy_1` through `pdp_feature_copy_3` | Multi-line text | Craft feature copy |
| `pdp_fit_crown` | Single line text | Fit/spec rows |
| `pdp_fit_brim` | Single line text | Fit/spec rows |
| `pdp_fit_adjustment` | Single line text | Fit/spec rows |
| `pdp_closeup_image_1` through `pdp_closeup_image_4` | File, image | Close-up image row |
| `pdp_lifestyle_image_1` through `pdp_lifestyle_image_4` | File, image | Lifestyle image row |
| `pdp_press_quote` | Multi-line text | Press quote |

Each section has fallback content, so products will still render before metafields are populated.
